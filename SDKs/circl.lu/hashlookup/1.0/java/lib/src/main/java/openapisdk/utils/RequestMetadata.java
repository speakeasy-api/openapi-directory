package openapisdk.utils;

import java.lang.reflect.Field;

public class RequestMetadata extends Metadata {
    public String mediaType = "application/octet-stream";

    // request:mediaType=multipart/form-data
    public static RequestMetadata parse(Field field) throws IllegalArgumentException, IllegalAccessException {
        RequestMetadata result = new RequestMetadata();
        result = (RequestMetadata) parse("request", result, field);
        return result;
    }

    private RequestMetadata() {
    }
}
