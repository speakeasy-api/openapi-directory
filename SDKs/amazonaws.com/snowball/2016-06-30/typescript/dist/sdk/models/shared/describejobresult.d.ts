import { SpeakeasyBase } from "../../../internal/utils";
import { JobMetadata } from "./jobmetadata";
/**
 * Success
 */
export declare class DescribeJobResult extends SpeakeasyBase {
    jobMetadata?: JobMetadata;
    subJobMetadata?: JobMetadata[];
}
