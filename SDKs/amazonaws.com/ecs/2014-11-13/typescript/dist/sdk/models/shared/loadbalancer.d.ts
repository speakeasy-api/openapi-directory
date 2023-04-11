import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p> <p>When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.</p> <p>We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration. </p> <p>A service-linked role is required for services that use multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export declare class LoadBalancer extends SpeakeasyBase {
    containerName?: string;
    containerPort?: number;
    loadBalancerName?: string;
    targetGroupArn?: string;
}
