import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceProperty } from "./resourceproperty";
/**
 * A resource in Amazon Web Services that Amazon Web Services Resource Explorer has discovered, and for which it has stored information in the index of the Amazon Web Services Region that contains the resource.
 */
export declare class Resource extends SpeakeasyBase {
    arn?: string;
    lastReportedAt?: Date;
    owningAccountId?: string;
    properties?: ResourceProperty[];
    region?: string;
    resourceType?: string;
    service?: string;
}
