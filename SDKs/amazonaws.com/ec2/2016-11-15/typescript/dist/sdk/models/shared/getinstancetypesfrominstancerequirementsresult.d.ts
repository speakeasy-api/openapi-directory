import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The list of instance types with the specified instance attributes.
 */
export declare class GetInstanceTypesFromInstanceRequirementsResultInstanceTypes extends SpeakeasyBase {
    instanceType?: string;
}
/**
 * Success
 */
export declare class GetInstanceTypesFromInstanceRequirementsResult extends SpeakeasyBase {
    instanceTypes?: GetInstanceTypesFromInstanceRequirementsResultInstanceTypes[];
    nextToken?: string;
}
