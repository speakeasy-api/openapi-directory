import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The import strategy you would like to set to import resources into Resilience Hub application.
 */
export declare enum ImportResourcesToDraftAppVersionRequestBodyImportStrategyEnum {
    AddOnly = "AddOnly",
    ReplaceAll = "ReplaceAll"
}
export declare class ImportResourcesToDraftAppVersionRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     * The input sources of the Amazon Elastic Kubernetes Service resources you need to import.
     */
    eksSources?: shared.EksSource[];
    /**
     * The import strategy you would like to set to import resources into Resilience Hub application.
     */
    importStrategy?: ImportResourcesToDraftAppVersionRequestBodyImportStrategyEnum;
    /**
     * The Amazon Resource Names (ARNs) for the resources.
     */
    sourceArns?: string[];
    /**
     *  A list of terraform file s3 URLs you need to import.
     */
    terraformSources?: shared.TerraformSource[];
}
export declare class ImportResourcesToDraftAppVersionRequest extends SpeakeasyBase {
    requestBody: ImportResourcesToDraftAppVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportResourcesToDraftAppVersionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    importResourcesToDraftAppVersionResponse?: shared.ImportResourcesToDraftAppVersionResponse;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
