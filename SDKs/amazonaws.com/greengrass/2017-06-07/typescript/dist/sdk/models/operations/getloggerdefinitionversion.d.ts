import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLoggerDefinitionVersionRequest extends SpeakeasyBase {
    /**
     * The ID of the logger definition.
     */
    loggerDefinitionId: string;
    /**
     * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    loggerDefinitionVersionId: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLoggerDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getLoggerDefinitionVersionResponse?: shared.GetLoggerDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
