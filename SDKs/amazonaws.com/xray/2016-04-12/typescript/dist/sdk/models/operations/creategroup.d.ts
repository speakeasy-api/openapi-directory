import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The structure containing configurations related to insights.
 */
export declare class CreateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
    insightsEnabled?: boolean;
    notificationsEnabled?: boolean;
}
export declare class CreateGroupRequestBody extends SpeakeasyBase {
    /**
     * The filter expression defining criteria by which to group traces.
     */
    filterExpression?: string;
    /**
     * The case-sensitive name of the new group. Default is a reserved name and names must be unique.
     */
    groupName: string;
    /**
     * The structure containing configurations related to insights.
     */
    insightsConfiguration?: CreateGroupRequestBodyInsightsConfiguration;
    /**
     * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use.</p> </li> </ul>
     */
    tags?: shared.Tag[];
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    requestBody: CreateGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGroupResult?: shared.CreateGroupResult;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
