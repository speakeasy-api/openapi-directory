import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The health status.
 */
export declare enum DescribeElasticGpusResultElasticGpuSetElasticGpuHealthStatusEnum {
    Ok = "OK",
    Impaired = "IMPAIRED"
}
/**
 * The status of the Elastic Graphics accelerator.
 */
export declare class DescribeElasticGpusResultElasticGpuSetElasticGpuHealth extends SpeakeasyBase {
    status?: DescribeElasticGpusResultElasticGpuSetElasticGpuHealthStatusEnum;
}
/**
 * The state of the Elastic Graphics accelerator.
 */
export declare enum DescribeElasticGpusResultElasticGpuSetElasticGpuStateEnum {
    Attached = "ATTACHED"
}
/**
 * Describes a tag.
 */
export declare class DescribeElasticGpusResultElasticGpuSetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an Elastic Graphics accelerator.
 */
export declare class DescribeElasticGpusResultElasticGpuSet extends SpeakeasyBase {
    availabilityZone?: string;
    elasticGpuHealth?: DescribeElasticGpusResultElasticGpuSetElasticGpuHealth;
    elasticGpuId?: string;
    elasticGpuState?: DescribeElasticGpusResultElasticGpuSetElasticGpuStateEnum;
    elasticGpuType?: string;
    instanceId?: string;
    tags?: DescribeElasticGpusResultElasticGpuSetTags[];
}
/**
 * Success
 */
export declare class DescribeElasticGpusResult extends SpeakeasyBase {
    elasticGpuSet?: DescribeElasticGpusResultElasticGpuSet[];
    maxResults?: number;
    nextToken?: string;
}
