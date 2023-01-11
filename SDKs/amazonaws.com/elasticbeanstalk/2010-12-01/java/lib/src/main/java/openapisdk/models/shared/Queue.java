package openapisdk.models.shared;



/**
 * Queue
 * Describes a queue.
**/
public class Queue {
    public String name;
    public Queue withName(String name) {
        this.name = name;
        return this;
    }
    public String url;
    public Queue withUrl(String url) {
        this.url = url;
        return this;
    }
}