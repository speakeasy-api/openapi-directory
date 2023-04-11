import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProjectSectionInsertRequest extends SpeakeasyBase {
    /**
     * Insert the given section immediately after the section specified by this parameter.
     */
    afterSection?: string;
    /**
     * Insert the given section immediately before the section specified by this parameter.
     */
    beforeSection?: string;
    /**
     * The project in which to reorder the given section.
     */
    project: string;
    /**
     * The section to reorder.
     */
    section: string;
}
