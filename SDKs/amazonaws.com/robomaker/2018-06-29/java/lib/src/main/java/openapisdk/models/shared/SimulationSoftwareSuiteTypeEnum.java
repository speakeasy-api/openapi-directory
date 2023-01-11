package openapisdk.models.shared;


public enum SimulationSoftwareSuiteTypeEnum {
    GAZEBO("Gazebo"),
    ROSBAG_PLAY("RosbagPlay");

    public final String value;

    private SimulationSoftwareSuiteTypeEnum(String value) {
        this.value = value;
    }
}
