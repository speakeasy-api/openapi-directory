import { SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";
import { NodeAssociationStatusEnum } from "./nodeassociationstatusenum";
/**
 * Success
 */
export declare class DescribeNodeAssociationStatusResponse extends SpeakeasyBase {
    engineAttributes?: EngineAttribute[];
    nodeAssociationStatus?: NodeAssociationStatusEnum;
}
