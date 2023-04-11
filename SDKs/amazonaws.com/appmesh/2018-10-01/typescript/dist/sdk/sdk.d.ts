import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://appmesh.{region}.amazonaws.com", "https://appmesh.{region}.amazonaws.com", "http://appmesh.{region}.amazonaws.com.cn", "https://appmesh.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * <p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and
 *
 * @remarks
 *          control containerized microservices. App Mesh standardizes how your microservices
 *          communicate, giving you end-to-end visibility and helping to ensure high-availability for
 *          your applications.</p>
 *          <p>App Mesh gives you consistent visibility and network traffic controls for every
 *          microservice in an application. You can use App Mesh with Amazon ECS
 *          (using the Amazon EC2 launch type), Amazon EKS, and Kubernetes on AWS.</p>
 *          <note>
 *             <p>App Mesh supports containerized microservice applications that use service discovery
 *             naming for their components. To use App Mesh, you must have a containerized application
 *             running on Amazon EC2 instances, hosted in either Amazon ECS, Amazon EKS, or Kubernetes on AWS. For
 *             more information about service discovery on Amazon ECS, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the
 *                <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> is supported.
 *             For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
 *                for Services and Pods</a> in the Kubernetes documentation.</p>
 *          </note>
 *
 * @see {@link https://docs.aws.amazon.com/appmesh/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
     *          between the services that reside within it.</p>
     *          <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
     *          routes to distribute traffic between the applications in your mesh.</p>
     */
    createMesh(req: operations.CreateMeshRequest, config?: AxiosRequestConfig): Promise<operations.CreateMeshResponse>;
    /**
     * <p>Creates a new route that is associated with a virtual router.</p>
     *          <p>You can use the <code>prefix</code> parameter in your route specification for path-based
     *          routing of requests. For example, if your virtual router service name is
     *             <code>my-service.local</code>, and you want the route to match requests to
     *             <code>my-service.local/metrics</code>, then your prefix should be
     *          <code>/metrics</code>.</p>
     *          <p>If your route matches a request, you can distribute traffic to one or more target
     *          virtual nodes with relative weighting.</p>
     */
    createRoute(req: operations.CreateRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteResponse>;
    /**
     * <p>Creates a new virtual node within a service mesh.</p>
     *          <p>A virtual node acts as logical pointer to a particular task group, such as an Amazon ECS
     *          service or a Kubernetes deployment. When you create a virtual node, you must specify the
     *          DNS service discovery name for your task group.</p>
     *          <p>Any inbound traffic that your virtual node expects should be specified as a
     *             <code>listener</code>. Any outbound traffic that your virtual node expects to reach
     *          should be specified as a <code>backend</code>.</p>
     *          <p>The response metadata for your new virtual node contains the <code>arn</code> that is
     *          associated with the virtual node. Set this value (either the full ARN or the truncated
     *          resource name, for example, <code>mesh/default/virtualNode/simpleapp</code>, as the
     *             <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
     *          proxy container in your task definition or pod spec. This is then mapped to the
     *             <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
     *          <note>
     *             <p>If you require your Envoy stats or tracing to use a different name, you can override
     *             the <code>node.cluster</code> value that is set by
     *                <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
     *                <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
     *          </note>
     */
    createVirtualNode(req: operations.CreateVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualNodeResponse>;
    /**
     * <p>Creates a new virtual router within a service mesh.</p>
     *          <p>Virtual routers handle traffic for one or more service names within your mesh. After you
     *          create your virtual router, create and associate routes for your virtual router that direct
     *          incoming requests to different virtual nodes.</p>
     */
    createVirtualRouter(req: operations.CreateVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualRouterResponse>;
    /**
     * <p>Deletes an existing service mesh.</p>
     *          <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
     *          mesh before you can delete the mesh itself.</p>
     */
    deleteMesh(req: operations.DeleteMeshRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMeshResponse>;
    /**
     * Deletes an existing route.
     */
    deleteRoute(req: operations.DeleteRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteResponse>;
    /**
     * Deletes an existing virtual node.
     */
    deleteVirtualNode(req: operations.DeleteVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualNodeResponse>;
    /**
     * <p>Deletes an existing virtual router.</p>
     *          <p>You must delete any routes associated with the virtual router before you can delete the
     *          router itself.</p>
     */
    deleteVirtualRouter(req: operations.DeleteVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualRouterResponse>;
    /**
     * Describes an existing service mesh.
     */
    describeMesh(req: operations.DescribeMeshRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMeshResponse>;
    /**
     * Describes an existing route.
     */
    describeRoute(req: operations.DescribeRouteRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRouteResponse>;
    /**
     * Describes an existing virtual node.
     */
    describeVirtualNode(req: operations.DescribeVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualNodeResponse>;
    /**
     * Describes an existing virtual router.
     */
    describeVirtualRouter(req: operations.DescribeVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualRouterResponse>;
    /**
     * Returns a list of existing service meshes.
     */
    listMeshes(req: operations.ListMeshesRequest, config?: AxiosRequestConfig): Promise<operations.ListMeshesResponse>;
    /**
     * Returns a list of existing routes in a service mesh.
     */
    listRoutes(req: operations.ListRoutesRequest, config?: AxiosRequestConfig): Promise<operations.ListRoutesResponse>;
    /**
     * Returns a list of existing virtual nodes.
     */
    listVirtualNodes(req: operations.ListVirtualNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualNodesResponse>;
    /**
     * Returns a list of existing virtual routers in a service mesh.
     */
    listVirtualRouters(req: operations.ListVirtualRoutersRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualRoutersResponse>;
    /**
     * Updates an existing route for a specified service mesh and virtual router.
     */
    updateRoute(req: operations.UpdateRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteResponse>;
    /**
     * Updates an existing virtual node in a specified service mesh.
     */
    updateVirtualNode(req: operations.UpdateVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVirtualNodeResponse>;
    /**
     * Updates an existing virtual router in a specified service mesh.
     */
    updateVirtualRouter(req: operations.UpdateVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVirtualRouterResponse>;
}
