import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the parent of a farm organization.
 */
export declare enum ParentTypeEnum {
    Farm = "farm"
}
/**
 * A minimal set of attributes regarding the parent of a farm organization.
 */
export declare class Parent extends SpeakeasyBase {
    /**
     * Unique identifier for the parent of a farm organization.
     */
    id: string;
    /**
     * Type of the parent of a farm organization.
     */
    type: ParentTypeEnum;
}
