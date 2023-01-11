import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainNameConfiguration
/** 
 * The domain name configuration.
**/
export class DomainNameConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiGatewayDomainName" })
  apiGatewayDomainName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CertificateName" })
  certificateName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CertificateUploadDate" })
  certificateUploadDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DomainNameStatus" })
  domainNameStatus?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DomainNameStatusMessage" })
  domainNameStatusMessage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OwnershipVerificationCertificateArn" })
  ownershipVerificationCertificateArn?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SecurityPolicy" })
  securityPolicy?: Record<string, any>;
}
