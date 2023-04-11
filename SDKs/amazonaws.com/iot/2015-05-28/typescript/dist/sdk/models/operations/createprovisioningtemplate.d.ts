import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
 */
export declare class CreateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
    payloadVersion?: string;
    targetArn?: string;
}
/**
 * The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>. For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>.
 */
export declare enum CreateProvisioningTemplateRequestBodyTypeEnum {
    FleetProvisioning = "FLEET_PROVISIONING",
    Jitp = "JITP"
}
export declare class CreateProvisioningTemplateRequestBody extends SpeakeasyBase {
    /**
     * The description of the provisioning template.
     */
    description?: string;
    /**
     * True to enable the provisioning template, otherwise false.
     */
    enabled?: boolean;
    /**
     * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
     */
    preProvisioningHook?: CreateProvisioningTemplateRequestBodyPreProvisioningHook;
    /**
     * The role ARN for the role associated with the provisioning template. This IoT role grants permission to provision a device.
     */
    provisioningRoleArn: string;
    /**
     * <p>Metadata which can be used to manage the provisioning template.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
     */
    tags?: shared.Tag[];
    /**
     * The JSON formatted contents of the provisioning template.
     */
    templateBody: string;
    /**
     * The name of the provisioning template.
     */
    templateName: string;
    /**
     * The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>. For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>.
     */
    type?: CreateProvisioningTemplateRequestBodyTypeEnum;
}
export declare class CreateProvisioningTemplateRequest extends SpeakeasyBase {
    requestBody: CreateProvisioningTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProvisioningTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProvisioningTemplateResponse?: shared.CreateProvisioningTemplateResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
