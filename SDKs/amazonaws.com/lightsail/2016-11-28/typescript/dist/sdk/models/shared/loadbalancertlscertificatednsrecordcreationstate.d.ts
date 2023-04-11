import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificateDnsRecordCreationStateCodeEnum } from "./loadbalancertlscertificatednsrecordcreationstatecodeenum";
/**
 * An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership.
 */
export declare class LoadBalancerTlsCertificateDnsRecordCreationState extends SpeakeasyBase {
    code?: LoadBalancerTlsCertificateDnsRecordCreationStateCodeEnum;
    message?: string;
}
