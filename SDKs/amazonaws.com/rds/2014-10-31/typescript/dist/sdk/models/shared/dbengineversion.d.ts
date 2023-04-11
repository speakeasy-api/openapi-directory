import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { CustomDBEngineVersionAMI } from "./customdbengineversionami";
import { SupportedCharacterSetsList } from "./supportedcharactersetslist";
import { SupportedTimezonesList } from "./supportedtimezoneslist";
import { TagList } from "./taglist";
import { ValidUpgradeTargetList } from "./validupgradetargetlist";
/**
 * This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
 */
export declare class DBEngineVersion extends SpeakeasyBase {
    createTime?: Date;
    customDBEngineVersionManifest?: string;
    dbEngineDescription?: string;
    dbEngineMediaType?: string;
    dbEngineVersionArn?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    databaseInstallationFilesS3BucketName?: string;
    databaseInstallationFilesS3Prefix?: string;
    defaultCharacterSet?: CharacterSet;
    engine?: string;
    engineVersion?: string;
    exportableLogTypes?: string[];
    image?: CustomDBEngineVersionAMI;
    kmsKeyId?: string;
    majorEngineVersion?: string;
    status?: string;
    supportedCACertificateIdentifiers?: string[];
    supportedCharacterSets?: SupportedCharacterSetsList[];
    supportedEngineModes?: string[];
    supportedFeatureNames?: string[];
    supportedNcharCharacterSets?: SupportedCharacterSetsList[];
    supportedTimezones?: SupportedTimezonesList[];
    supportsBabelfish?: boolean;
    supportsCertificateRotationWithoutRestart?: boolean;
    supportsGlobalDatabases?: boolean;
    supportsLogExportsToCloudwatchLogs?: boolean;
    supportsParallelQuery?: boolean;
    supportsReadReplica?: boolean;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tagList?: TagList[];
    validUpgradeTarget?: ValidUpgradeTargetList[];
}
