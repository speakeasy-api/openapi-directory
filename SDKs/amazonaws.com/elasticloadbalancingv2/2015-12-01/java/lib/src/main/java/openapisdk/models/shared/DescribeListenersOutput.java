package openapisdk.models.shared;



public class DescribeListenersOutput {
    public Listener[] listeners;
    public DescribeListenersOutput withListeners(Listener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    public String nextMarker;
    public DescribeListenersOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}