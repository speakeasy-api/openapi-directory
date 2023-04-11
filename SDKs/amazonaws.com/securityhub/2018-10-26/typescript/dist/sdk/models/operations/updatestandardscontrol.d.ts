import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The updated status of the security standard control.
 */
export declare enum UpdateStandardsControlRequestBodyControlStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateStandardsControlRequestBody extends SpeakeasyBase {
    /**
     * The updated status of the security standard control.
     */
    controlStatus?: UpdateStandardsControlRequestBodyControlStatusEnum;
    /**
     * A description of the reason why you are disabling a security standard control. If you are disabling a control, then this is required.
     */
    disabledReason?: string;
}
export declare class UpdateStandardsControlRequest extends SpeakeasyBase {
    requestBody: UpdateStandardsControlRequestBody;
    /**
     * The ARN of the security standard control to enable or disable.
     */
    standardsControlArn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStandardsControlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateStandardsControlResponse?: Record<string, any>;
}
