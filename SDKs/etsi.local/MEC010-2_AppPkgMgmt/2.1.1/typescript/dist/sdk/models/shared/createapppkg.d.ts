import { SpeakeasyBase } from "../../../internal/utils";
import { Checksum } from "./checksum";
/**
 * Resource to be created
 */
export declare class CreateAppPkg extends SpeakeasyBase {
    /**
     * Name of the application package to be onboarded.
     */
    appPkgName: string;
    appPkgPath: string;
    /**
     * Version of the application package to be onboarded.
     *
     * @remarks
     * The appPkgName with appPkgVersion can be used to uniquely identify the application package.
     */
    appPkgVersion: string;
    /**
     * The provider's name of the application package to be onboarded.
     */
    appProvider?: string;
    checksum: Checksum;
    /**
     * 'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'
     */
    userDefinedData?: Record<string, any>;
}
