import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link to a resource related to this object.
 */
export declare class SubjectTypesRepositoryLink extends SpeakeasyBase {
    href?: string;
    name?: string;
}
export declare class SubjectTypesRepository extends SpeakeasyBase {
    /**
     * A link to a resource related to this object.
     */
    events?: SubjectTypesRepositoryLink;
}
/**
 * A link to a resource related to this object.
 */
export declare class SubjectTypesWorkspaceLink extends SpeakeasyBase {
    href?: string;
    name?: string;
}
export declare class SubjectTypesWorkspace extends SpeakeasyBase {
    /**
     * A link to a resource related to this object.
     */
    events?: SubjectTypesWorkspaceLink;
}
/**
 * The mapping of resource/subject types pointing to their individual event types.
 */
export declare class SubjectTypes extends SpeakeasyBase {
    repository?: SubjectTypesRepository;
    workspace?: SubjectTypesWorkspace;
}
