import { APIInfo } from "./apiinfo";
import { Authentication } from "./authentication";
import { ContainerGroups } from "./containergroups";
import { FileShares } from "./fileshares";
import { Images } from "./images";
import { PrivateDockerImagesRegistry } from "./privatedockerimagesregistry";
import { PublicIPAddresses } from "./publicipaddresses";
import { Quota } from "./quota";
import { SingleContainers } from "./singlecontainers";
import { Volumes } from "./volumes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://containers-api.ng.bluemix.net/v3"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Containers are virtual software objects that include all the elements that an app needs to run. A container has the benefits of resource isolation and allocation but is more portable and efficient than, for example, a virtual machine.
 *
 * @remarks
 *
 *  This documentation describes the IBM Containers API, which is based on the Docker Remote API. The API provides endpoints that you can use to create and manage your single containers and container groups in Bluemix. Endpoints are summarized under the following tags:
 *
 * - **Authentication**: Retrieve and refresh your TLS certificates.
 * - **Private Docker images registry**: Create your own private Docker images registry in Bluemix by setting a namespace for your organization.
 * - **Images**: View, build, and push your images to your private Bluemix registry so you can use them with IBM Containers. You can also scan your container images with the Vulnerability Advisor against standard policies set by the organization manager and a database of known Ubuntu issues.
 * - **Single Containers**: Create and manage single containers in Bluemix. Use a single container to implement short-lived processes or to run simple tests as you develop an app or service. To make your single container available from the internet, review the `Public IP addresses` endpoints.
 * - **Container Groups**: Create and manage your container groups in Bluemix. A container group consists of multiple single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer further options at no cost to make your app highly available. These options include in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage. Map a public route to your container group to make your app accessible from the internet.
 * - **Public IP addresses**: Use these endpoints to request public IP addresses for your space. You can bind this IP address to your container to make your container accessible from the internet.
 * - **File shares**: Create, list and delete file shares in a space. A file share is a NFS storage system that hosts Docker volumes.
 * - **Volumes**: Create and manage container volumes in your space to persist the data of your containers.
 *
 *
 *  Each API request requires an HTTP header that includes the 'X-Auth-Token’ and 'X-Auth-Project-Id’ parameter.
 *
 * - **X-Auth-Token**: The JSON web token (JWT) that you receive when logging into the Bluemix platform. It allows you to use the IBM Containers REST API, access services, and resources. Run `cf oauth-token` to retrieve your access token information.
 * - **X-Auth-Project-Id**: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
 *
 *
 *  For further information about how containers work in the IBM Containers service, review the documentation under https://new-console.ng.bluemix.net/docs/containers/container_index.html.
 */
export declare class SDK {
    apiInfo: APIInfo;
    authentication: Authentication;
    containerGroups: ContainerGroups;
    fileShares: FileShares;
    images: Images;
    privateDockerImagesRegistry: PrivateDockerImagesRegistry;
    publicIPAddresses: PublicIPAddresses;
    quota: Quota;
    singleContainers: SingleContainers;
    volumes: Volumes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
