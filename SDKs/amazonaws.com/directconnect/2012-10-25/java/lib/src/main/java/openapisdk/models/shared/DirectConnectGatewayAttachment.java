package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectConnectGatewayAttachment
 * Information about an attachment between a Direct Connect gateway and a virtual interface.
**/
public class DirectConnectGatewayAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentState")
    public DirectConnectGatewayAttachmentStateEnum attachmentState;
    public DirectConnectGatewayAttachment withAttachmentState(DirectConnectGatewayAttachmentStateEnum attachmentState) {
        this.attachmentState = attachmentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentType")
    public DirectConnectGatewayAttachmentTypeEnum attachmentType;
    public DirectConnectGatewayAttachment withAttachmentType(DirectConnectGatewayAttachmentTypeEnum attachmentType) {
        this.attachmentType = attachmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public DirectConnectGatewayAttachment withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateChangeError")
    public String stateChangeError;
    public DirectConnectGatewayAttachment withStateChangeError(String stateChangeError) {
        this.stateChangeError = stateChangeError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public DirectConnectGatewayAttachment withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceOwnerAccount")
    public String virtualInterfaceOwnerAccount;
    public DirectConnectGatewayAttachment withVirtualInterfaceOwnerAccount(String virtualInterfaceOwnerAccount) {
        this.virtualInterfaceOwnerAccount = virtualInterfaceOwnerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceRegion")
    public String virtualInterfaceRegion;
    public DirectConnectGatewayAttachment withVirtualInterfaceRegion(String virtualInterfaceRegion) {
        this.virtualInterfaceRegion = virtualInterfaceRegion;
        return this;
    }
}