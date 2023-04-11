import { SpeakeasyBase } from "../../../internal/utils";
import { AppComponent } from "./appcomponent";
import { LogicalResourceId } from "./logicalresourceid";
import { PhysicalResourceId } from "./physicalresourceid";
/**
 * Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or an Resilience Hub-native identifier.
 */
export declare class PhysicalResource extends SpeakeasyBase {
    additionalInfo?: Record<string, string[]>;
    appComponents?: AppComponent[];
    excluded?: boolean;
    logicalResourceId: LogicalResourceId;
    physicalResourceId: PhysicalResourceId;
    resourceName?: string;
    resourceType: string;
}
