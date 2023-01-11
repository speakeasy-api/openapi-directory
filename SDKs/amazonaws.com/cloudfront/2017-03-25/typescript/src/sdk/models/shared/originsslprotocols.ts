import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OriginSslProtocols
/** 
 * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. 
**/
export class OriginSslProtocols extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items: Record<string, any>[];

  @SpeakeasyMetadata()
  quantity: number;
}
