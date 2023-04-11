import { SpeakeasyBase } from "../../../internal/utils";
import { DataClassificationDetails } from "./dataclassificationdetails";
import { PartitionEnum } from "./partitionenum";
import { ResourceDetails } from "./resourcedetails";
/**
 * A resource related to a finding.
 */
export declare class Resource extends SpeakeasyBase {
    dataClassification?: DataClassificationDetails;
    details?: ResourceDetails;
    id: string;
    partition?: PartitionEnum;
    region?: string;
    resourceRole?: string;
    tags?: Record<string, string>;
    type: string;
}
