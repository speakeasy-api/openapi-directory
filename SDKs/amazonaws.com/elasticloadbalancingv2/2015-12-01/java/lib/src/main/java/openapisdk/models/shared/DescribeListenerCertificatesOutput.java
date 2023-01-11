package openapisdk.models.shared;



public class DescribeListenerCertificatesOutput {
    public Certificate[] certificates;
    public DescribeListenerCertificatesOutput withCertificates(Certificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    public String nextMarker;
    public DescribeListenerCertificatesOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}