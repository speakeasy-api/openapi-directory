import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of `"preliminary"`, `"pending"`, `"correction"`, `"final"` or `"canceled"`. Defaults to `"preliminary"`
 */
export declare enum LabTestStatusEnum {
    P = "P",
    I = "I",
    C = "C",
    F = "F",
    X = "X"
}
/**
 * Created
 */
export declare class LabTest extends SpeakeasyBase {
    code?: string;
    /**
     * The date the specimen were collected
     */
    collectionDate?: string;
    /**
     * Short description of the ICD-10 code
     */
    description?: string;
    id?: number;
    /**
     * Notes which are meant for, and read by, the labs
     */
    internalNotes?: string;
    /**
     * ID of associated lab order
     */
    labOrder: number;
    /**
     * Name for the test
     */
    name?: string;
    /**
     * Notes which are not meant for labs, but are copied on the results.
     */
    reportNotes?: string;
    specimenCondition?: string;
    specimenSource?: string;
    specimenTotalVolume?: number;
    /**
     * One of `"preliminary"`, `"pending"`, `"correction"`, `"final"` or `"canceled"`. Defaults to `"preliminary"`
     */
    status?: LabTestStatusEnum;
}
