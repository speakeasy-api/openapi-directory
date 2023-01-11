package openapisdk.models.shared;



/**
 * StatusCodes
 * Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.
**/
public class StatusCodes {
    public Long status2xx;
    public StatusCodes withStatus2xx(Long status2xx) {
        this.status2xx = status2xx;
        return this;
    }
    public Long status3xx;
    public StatusCodes withStatus3xx(Long status3xx) {
        this.status3xx = status3xx;
        return this;
    }
    public Long status4xx;
    public StatusCodes withStatus4xx(Long status4xx) {
        this.status4xx = status4xx;
        return this;
    }
    public Long status5xx;
    public StatusCodes withStatus5xx(Long status5xx) {
        this.status5xx = status5xx;
        return this;
    }
}