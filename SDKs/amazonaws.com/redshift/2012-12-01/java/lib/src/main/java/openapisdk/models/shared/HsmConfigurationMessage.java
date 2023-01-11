package openapisdk.models.shared;



/**
 * HsmConfigurationMessage
 * <p/>
**/
public class HsmConfigurationMessage {
    public HsmConfigurationList[] hsmConfigurations;
    public HsmConfigurationMessage withHsmConfigurations(HsmConfigurationList[] hsmConfigurations) {
        this.hsmConfigurations = hsmConfigurations;
        return this;
    }
    public String marker;
    public HsmConfigurationMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}