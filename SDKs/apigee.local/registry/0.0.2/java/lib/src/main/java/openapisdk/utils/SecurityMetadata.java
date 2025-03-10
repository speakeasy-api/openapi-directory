package openapisdk.utils;

import java.lang.reflect.Field;

public class SecurityMetadata extends Metadata {
    public String type;
    public String subtype;
    public boolean option;
    public boolean scheme;
    public String name;

    // security:scheme=true,type=apiKey,subtype=header
    public static SecurityMetadata parse(Field field) throws IllegalArgumentException, IllegalAccessException {
        SecurityMetadata result = new SecurityMetadata();
        result = (SecurityMetadata) parse("security", result, field);
        return result;
    }

    private SecurityMetadata() {
    }
}
