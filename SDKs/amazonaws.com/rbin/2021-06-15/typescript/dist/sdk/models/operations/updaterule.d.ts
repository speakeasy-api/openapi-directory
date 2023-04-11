import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <note> <p>This parameter is currently not supported. You can't update a retention rule's resource type after creation.</p> </note>
 */
export declare enum UpdateRuleRequestBodyResourceTypeEnum {
    EbsSnapshot = "EBS_SNAPSHOT",
    Ec2Image = "EC2_IMAGE"
}
/**
 * Information about the retention period for which the retention rule is to retain resources.
 */
export declare class UpdateRuleRequestBodyRetentionPeriod extends SpeakeasyBase {
    retentionPeriodUnit?: shared.RetentionPeriodUnitEnum;
    retentionPeriodValue?: number;
}
export declare class UpdateRuleRequestBody extends SpeakeasyBase {
    /**
     * The retention rule description.
     */
    description?: string;
    /**
     * <p>Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p> <p>You can add the same tag key and value pair to a maximum or five retention rules.</p> <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
     */
    resourceTags?: shared.ResourceTag[];
    /**
     * <note> <p>This parameter is currently not supported. You can't update a retention rule's resource type after creation.</p> </note>
     */
    resourceType?: UpdateRuleRequestBodyResourceTypeEnum;
    /**
     * Information about the retention period for which the retention rule is to retain resources.
     */
    retentionPeriod?: UpdateRuleRequestBodyRetentionPeriod;
}
export declare class UpdateRuleRequest extends SpeakeasyBase {
    requestBody: UpdateRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the retention rule.
     */
    identifier: string;
}
export declare class UpdateRuleResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateRuleResponse?: shared.UpdateRuleResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
