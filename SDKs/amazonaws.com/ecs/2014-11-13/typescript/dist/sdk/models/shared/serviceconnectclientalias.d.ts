import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Each alias ("endpoint") is a fully-qualified name and port number that other tasks ("clients") can use to connect to this service.</p> <p>Each name and port mapping must be unique within the namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export declare class ServiceConnectClientAlias extends SpeakeasyBase {
    dnsName?: string;
    port: number;
}
