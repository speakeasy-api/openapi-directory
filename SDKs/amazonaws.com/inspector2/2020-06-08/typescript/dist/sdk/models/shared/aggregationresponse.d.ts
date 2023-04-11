import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAggregationResponse } from "./accountaggregationresponse";
import { AmiAggregationResponse } from "./amiaggregationresponse";
import { AwsEcrContainerAggregationResponse } from "./awsecrcontaineraggregationresponse";
import { Ec2InstanceAggregationResponse } from "./ec2instanceaggregationresponse";
import { FindingTypeAggregationResponse } from "./findingtypeaggregationresponse";
import { ImageLayerAggregationResponse } from "./imagelayeraggregationresponse";
import { LambdaFunctionAggregationResponse } from "./lambdafunctionaggregationresponse";
import { LambdaLayerAggregationResponse } from "./lambdalayeraggregationresponse";
import { PackageAggregationResponse } from "./packageaggregationresponse";
import { RepositoryAggregationResponse } from "./repositoryaggregationresponse";
import { TitleAggregationResponse } from "./titleaggregationresponse";
/**
 * A structure that contains details about the results of an aggregation type.
 */
export declare class AggregationResponse extends SpeakeasyBase {
    accountAggregation?: AccountAggregationResponse;
    amiAggregation?: AmiAggregationResponse;
    awsEcrContainerAggregation?: AwsEcrContainerAggregationResponse;
    ec2InstanceAggregation?: Ec2InstanceAggregationResponse;
    findingTypeAggregation?: FindingTypeAggregationResponse;
    imageLayerAggregation?: ImageLayerAggregationResponse;
    lambdaFunctionAggregation?: LambdaFunctionAggregationResponse;
    lambdaLayerAggregation?: LambdaLayerAggregationResponse;
    packageAggregation?: PackageAggregationResponse;
    repositoryAggregation?: RepositoryAggregationResponse;
    titleAggregation?: TitleAggregationResponse;
}
