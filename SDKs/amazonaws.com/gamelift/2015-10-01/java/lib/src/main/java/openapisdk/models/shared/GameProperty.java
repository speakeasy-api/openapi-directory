package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GameProperty
 * Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> GameLift Developer Guide</a>.
**/
public class GameProperty {
    @JsonProperty("Key")
    public String key;
    public GameProperty withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public GameProperty withValue(String value) {
        this.value = value;
        return this;
    }
}