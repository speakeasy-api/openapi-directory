import { SpeakeasyBase } from "../../../internal/utils";
import { NullableCodeOfConductSimple } from "./nullablecodeofconductsimple";
import { NullableCommunityHealthFile } from "./nullablecommunityhealthfile";
import { NullableLicenseSimple } from "./nullablelicensesimple";
export declare class CommunityProfileFiles extends SpeakeasyBase {
    /**
     * Code of Conduct Simple
     */
    codeOfConduct: NullableCodeOfConductSimple;
    codeOfConductFile: NullableCommunityHealthFile;
    contributing: NullableCommunityHealthFile;
    issueTemplate: NullableCommunityHealthFile;
    /**
     * License Simple
     */
    license: NullableLicenseSimple;
    pullRequestTemplate: NullableCommunityHealthFile;
    readme: NullableCommunityHealthFile;
}
/**
 * Community Profile
 */
export declare class CommunityProfile extends SpeakeasyBase {
    contentReportsEnabled?: boolean;
    description: string;
    documentation: string;
    files: CommunityProfileFiles;
    healthPercentage: number;
    updatedAt: Date;
}
