import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The operating system platform for the imported VM.
 */
export declare enum ImportVmImageRequestBodyPlatformEnum {
    Windows = "Windows",
    Linux = "Linux"
}
export declare class ImportVmImageRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.
     */
    clientToken: string;
    /**
     * The description for the base image that is created by the import process.
     */
    description?: string;
    /**
     * The name of the base image that is created by the import process.
     */
    name: string;
    /**
     * The operating system version for the imported VM.
     */
    osVersion?: string;
    /**
     * The operating system platform for the imported VM.
     */
    platform: ImportVmImageRequestBodyPlatformEnum;
    /**
     * <p>The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
     */
    semanticVersion: string;
    /**
     * Tags that are attached to the import resources.
     */
    tags?: Record<string, string>;
    /**
     * The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe.
     */
    vmImportTaskId: string;
}
export declare class ImportVmImageRequest extends SpeakeasyBase {
    requestBody: ImportVmImageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportVmImageResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    importVmImageResponse?: shared.ImportVmImageResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
