import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETImportStacksToStackSetActionEnum {
    ImportStacksToStackSet = "ImportStacksToStackSet"
}
/**
 * <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>For service managed stack sets, specify <code>DELEGATED_ADMIN</code>.</p> </li> </ul>
 */
export declare enum GETImportStacksToStackSetCallAsEnum {
    Self = "SELF",
    DelegatedAdmin = "DELEGATED_ADMIN"
}
/**
 * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
 */
export declare class GETImportStacksToStackSetOperationPreferences extends SpeakeasyBase {
    failureToleranceCount?: number;
    failureTolerancePercentage?: number;
    maxConcurrentCount?: number;
    maxConcurrentPercentage?: number;
    regionConcurrencyType?: shared.RegionConcurrencyTypeEnum;
    regionOrder?: string[];
}
export declare enum GETImportStacksToStackSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETImportStacksToStackSetRequest extends SpeakeasyBase {
    action: GETImportStacksToStackSetActionEnum;
    /**
     * <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>For service managed stack sets, specify <code>DELEGATED_ADMIN</code>.</p> </li> </ul>
     */
    callAs?: GETImportStacksToStackSetCallAsEnum;
    /**
     * A unique, user defined, identifier for the stack set operation.
     */
    operationId?: string;
    /**
     * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
     */
    operationPreferences?: GETImportStacksToStackSetOperationPreferences;
    /**
     * The list of OU ID's to which the stacks being imported has to be mapped as deployment target.
     */
    organizationalUnitIds?: string[];
    /**
     * <p>The IDs of the stacks you are importing into a stack set. You import up to 10 stacks per stack set at a time.</p> <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
     */
    stackIds?: string[];
    /**
     * <p>The Amazon S3 URL which contains list of stack ids to be inputted.</p> <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
     */
    stackIdsUrl?: string;
    /**
     * The name of the stack set. The name must be unique in the Region where you create your stack set.
     */
    stackSetName: string;
    version: GETImportStacksToStackSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETImportStacksToStackSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
