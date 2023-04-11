import { SpeakeasyBase } from "../../../internal/utils";
import { Section } from "./section";
/**
 * <p>Details about the game configuration.</p> <p> The game configuration is organized into named sections, where the schema of each section is defined by an extension. The schema for these sections can be retrieved using the <code>GetExtensionVersion</code> operation. </p>
 */
export declare class GameConfigurationDetails extends SpeakeasyBase {
    created?: Date;
    lastUpdated?: Date;
    sections?: Record<string, Section>;
}
