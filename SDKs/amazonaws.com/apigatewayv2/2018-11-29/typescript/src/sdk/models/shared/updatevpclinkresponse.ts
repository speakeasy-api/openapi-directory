import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateVpcLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkId" })
  vpcLinkId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkStatus" })
  vpcLinkStatus?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkStatusMessage" })
  vpcLinkStatusMessage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=VpcLinkVersion" })
  vpcLinkVersion?: Record<string, any>;
}
