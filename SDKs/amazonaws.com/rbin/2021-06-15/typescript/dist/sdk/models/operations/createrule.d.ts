import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a retention rule lock configuration.
 */
export declare class CreateRuleRequestBodyLockConfiguration extends SpeakeasyBase {
    unlockDelay?: shared.UnlockDelay;
}
/**
 * The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To retain snapshots, specify <code>EBS_SNAPSHOT</code>. To retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
 */
export declare enum CreateRuleRequestBodyResourceTypeEnum {
    EbsSnapshot = "EBS_SNAPSHOT",
    Ec2Image = "EC2_IMAGE"
}
/**
 * Information about the retention period for which the retention rule is to retain resources.
 */
export declare class CreateRuleRequestBodyRetentionPeriod extends SpeakeasyBase {
    retentionPeriodUnit?: shared.RetentionPeriodUnitEnum;
    retentionPeriodValue?: number;
}
export declare class CreateRuleRequestBody extends SpeakeasyBase {
    /**
     * The retention rule description.
     */
    description?: string;
    /**
     * Information about a retention rule lock configuration.
     */
    lockConfiguration?: CreateRuleRequestBodyLockConfiguration;
    /**
     * <p>Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p> <p>You can add the same tag key and value pair to a maximum or five retention rules.</p> <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
     */
    resourceTags?: shared.ResourceTag[];
    /**
     * The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To retain snapshots, specify <code>EBS_SNAPSHOT</code>. To retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
     */
    resourceType: CreateRuleRequestBodyResourceTypeEnum;
    /**
     * Information about the retention period for which the retention rule is to retain resources.
     */
    retentionPeriod: CreateRuleRequestBodyRetentionPeriod;
    /**
     * Information about the tags to assign to the retention rule.
     */
    tags?: shared.Tag[];
}
export declare class CreateRuleRequest extends SpeakeasyBase {
    requestBody: CreateRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRuleResponse?: shared.CreateRuleResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
