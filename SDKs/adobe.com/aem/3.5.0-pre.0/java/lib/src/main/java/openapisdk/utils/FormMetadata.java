package openapisdk.utils;

import java.lang.reflect.Field;

public class FormMetadata extends Metadata {
    public String style = "form";
    public boolean explode = true;
    public boolean json;
    public String name;

    // form:name=propName,style=spaceDelimited,explode=true
    public static FormMetadata parse(Field field) throws IllegalArgumentException, IllegalAccessException {
        FormMetadata result = new FormMetadata();
        result = (FormMetadata) parse("form", result, field);

        return result;
    }

    private FormMetadata() {
    }
}
