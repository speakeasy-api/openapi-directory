import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of known component.
 */
export declare enum UpdateApplicationComponentConfigRequestBodyAppTypeEnum {
    DotNetFramework = "DotNetFramework",
    Java = "Java",
    SQLServer = "SQLServer",
    Iis = "IIS",
    Oracle = "Oracle",
    Other = "Other",
    Tomcat = "Tomcat",
    JBoss = "JBoss",
    Spring = "Spring",
    MongoDB = "Mongo DB",
    Db2 = "DB2",
    MariaDB = "Maria DB",
    MySQL = "MySQL",
    Sybase = "Sybase",
    PostgreSQLServer = "PostgreSQLServer",
    Cassandra = "Cassandra",
    IBMWebSphere = "IBM WebSphere",
    OracleWebLogic = "Oracle WebLogic",
    VisualBasic = "Visual Basic",
    Unknown = "Unknown",
    DotnetCore = "DotnetCore",
    Dotnet = "Dotnet"
}
/**
 *  Indicates whether the application component has been included for server recommendation or not.
 */
export declare enum UpdateApplicationComponentConfigRequestBodyInclusionStatusEnum {
    ExcludeFromAssessment = "excludeFromAssessment",
    IncludeInAssessment = "includeInAssessment"
}
/**
 *  Information about all the available strategy options for migrating and modernizing an application component.
 */
export declare class UpdateApplicationComponentConfigRequestBodyStrategyOption extends SpeakeasyBase {
    isPreferred?: boolean;
    strategy?: shared.StrategyEnum;
    targetDestination?: shared.TargetDestinationEnum;
    toolName?: shared.TransformationToolNameEnum;
}
export declare class UpdateApplicationComponentConfigRequestBody extends SpeakeasyBase {
    /**
     * The type of known component.
     */
    appType?: UpdateApplicationComponentConfigRequestBodyAppTypeEnum;
    /**
     *  The ID of the application component. The ID is unique within an AWS account.
     */
    applicationComponentId: string;
    /**
     * Update the configuration request of an application component. If it is set to true, the source code and/or database credentials are updated. If it is set to false, the source code and/or database credentials are updated and an analysis is initiated.
     */
    configureOnly?: boolean;
    /**
     *  Indicates whether the application component has been included for server recommendation or not.
     */
    inclusionStatus?: UpdateApplicationComponentConfigRequestBodyInclusionStatusEnum;
    /**
     *  Database credentials.
     */
    secretsManagerKey?: string;
    /**
     *  The list of source code configurations to update for the application component.
     */
    sourceCodeList?: shared.SourceCode[];
    /**
     *  Information about all the available strategy options for migrating and modernizing an application component.
     */
    strategyOption?: UpdateApplicationComponentConfigRequestBodyStrategyOption;
}
export declare class UpdateApplicationComponentConfigRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationComponentConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateApplicationComponentConfigResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateApplicationComponentConfigResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
