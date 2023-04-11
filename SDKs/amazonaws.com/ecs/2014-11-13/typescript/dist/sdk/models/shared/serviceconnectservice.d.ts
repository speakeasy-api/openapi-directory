import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceConnectClientAlias } from "./serviceconnectclientalias";
/**
 * The Service Connect service object configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
 */
export declare class ServiceConnectService extends SpeakeasyBase {
    clientAliases?: ServiceConnectClientAlias[];
    discoveryName?: string;
    ingressPortOverride?: number;
    portName: string;
}
