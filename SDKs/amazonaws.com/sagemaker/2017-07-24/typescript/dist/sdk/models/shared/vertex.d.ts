import { SpeakeasyBase } from "../../../internal/utils";
import { LineageTypeEnum } from "./lineagetypeenum";
/**
 * A lineage entity connected to the starting entity(ies).
 */
export declare class Vertex extends SpeakeasyBase {
    arn?: string;
    lineageType?: LineageTypeEnum;
    type?: string;
}
