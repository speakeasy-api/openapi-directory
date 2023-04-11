import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that describes a property of a resource.
 */
export declare class ResourceProperty extends SpeakeasyBase {
    data?: Record<string, any>;
    lastReportedAt?: Date;
    name?: string;
}
