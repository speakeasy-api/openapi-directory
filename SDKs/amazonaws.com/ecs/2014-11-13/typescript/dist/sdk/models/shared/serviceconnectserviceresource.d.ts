import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The Service Connect resource. Each configuration maps a discovery name to a Cloud Map service name. The data is stored in Cloud Map as part of the Service Connect configuration for each discovery name of this Amazon ECS service.</p> <p>A task can resolve the <code>dnsName</code> for each of the <code>clientAliases</code> of a service. However a task can't resolve the discovery names. If you want to connect to a service, refer to the <code>ServiceConnectConfiguration</code> of that service for the list of <code>clientAliases</code> that you can use.</p>
 */
export declare class ServiceConnectServiceResource extends SpeakeasyBase {
    discoveryArn?: string;
    discoveryName?: string;
}
