package openapisdk.models.shared;



/**
 * LogDeliveryConfigurationList
 * Returns the destination, format and type of the logs. 
**/
public class LogDeliveryConfigurationList {
    public DestinationDetails destinationDetails;
    public LogDeliveryConfigurationList withDestinationDetails(DestinationDetails destinationDetails) {
        this.destinationDetails = destinationDetails;
        return this;
    }
    public DestinationTypeEnum destinationType;
    public LogDeliveryConfigurationList withDestinationType(DestinationTypeEnum destinationType) {
        this.destinationType = destinationType;
        return this;
    }
    public LogFormatEnum logFormat;
    public LogDeliveryConfigurationList withLogFormat(LogFormatEnum logFormat) {
        this.logFormat = logFormat;
        return this;
    }
    public LogTypeEnum logType;
    public LogDeliveryConfigurationList withLogType(LogTypeEnum logType) {
        this.logType = logType;
        return this;
    }
    public String message;
    public LogDeliveryConfigurationList withMessage(String message) {
        this.message = message;
        return this;
    }
    public LogDeliveryConfigurationStatusEnum status;
    public LogDeliveryConfigurationList withStatus(LogDeliveryConfigurationStatusEnum status) {
        this.status = status;
        return this;
    }
}