package openapisdk.models.shared;



/**
 * RedirectActionConfig
 * <p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p>
**/
public class RedirectActionConfig {
    public String host;
    public RedirectActionConfig withHost(String host) {
        this.host = host;
        return this;
    }
    public String path;
    public RedirectActionConfig withPath(String path) {
        this.path = path;
        return this;
    }
    public String port;
    public RedirectActionConfig withPort(String port) {
        this.port = port;
        return this;
    }
    public String protocol;
    public RedirectActionConfig withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    public String query;
    public RedirectActionConfig withQuery(String query) {
        this.query = query;
        return this;
    }
    public RedirectActionStatusCodeEnumEnum statusCode;
    public RedirectActionConfig withStatusCode(RedirectActionStatusCodeEnumEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}