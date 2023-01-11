package openapisdk.models.operations;


public enum GetDataEndpointRequestBodyApiNameEnum {
    PUT_MEDIA("PUT_MEDIA"),
    GET_MEDIA("GET_MEDIA"),
    LIST_FRAGMENTS("LIST_FRAGMENTS"),
    GET_MEDIA_FOR_FRAGMENT_LIST("GET_MEDIA_FOR_FRAGMENT_LIST"),
    GET_HLS_STREAMING_SESSION_URL("GET_HLS_STREAMING_SESSION_URL"),
    GET_DASH_STREAMING_SESSION_URL("GET_DASH_STREAMING_SESSION_URL"),
    GET_CLIP("GET_CLIP");

    public final String value;

    private GetDataEndpointRequestBodyApiNameEnum(String value) {
        this.value = value;
    }
}
