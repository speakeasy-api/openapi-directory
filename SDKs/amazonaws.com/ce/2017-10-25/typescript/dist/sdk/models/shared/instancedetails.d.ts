import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceDetails } from "./ec2instancedetails";
import { ElastiCacheInstanceDetails } from "./elasticacheinstancedetails";
import { ESInstanceDetails } from "./esinstancedetails";
import { RDSInstanceDetails } from "./rdsinstancedetails";
import { RedshiftInstanceDetails } from "./redshiftinstancedetails";
/**
 * Details about the instances that Amazon Web Services recommends that you purchase.
 */
export declare class InstanceDetails extends SpeakeasyBase {
    ec2InstanceDetails?: Ec2InstanceDetails;
    esInstanceDetails?: ESInstanceDetails;
    elastiCacheInstanceDetails?: ElastiCacheInstanceDetails;
    rdsInstanceDetails?: RDSInstanceDetails;
    redshiftInstanceDetails?: RedshiftInstanceDetails;
}
